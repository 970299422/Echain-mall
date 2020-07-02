<template>
  <div class="login-container">
    
    <div class="logo-box">
      <img src="../../assets/img/logo_2.png" alt="logo" />
    </div>

    <div class="dialog-content">
      <ul class="tab-header">
        <li :class="{active: activeId === item.id}" v-for="(item, key) in tabList" :key='key' @click="handleClick(item.id)">{{item.name}}</li>
      </ul>
      
      <div class="tab-content">
        <!-- 手机登录 -->
        <el-form v-show="activeId === 0" :model="phoneForm" :rules="phoneRules" ref="phoneForm">
          <div class="phone-num">
            <el-form-item prop="region">
              <el-select v-model="phoneForm.region">
                <el-option
                  v-for="item in regionList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="phoneNum">
              <el-input v-model="phoneForm.phoneNum" placeholder="Phone Number"></el-input>
            </el-form-item>
          </div>

          <div class="sms-code" v-if="compStatus === 2">
            <el-form-item prop="verificationCode">
              <el-input v-model="phoneForm.verificationCode" placeholder="One Time Password"></el-input>
            </el-form-item>
            <el-form-item class="sms-code-btn">
              <el-button>Send</el-button>
            </el-form-item>
          </div>

          <el-form-item prop="passwd" class="passwd">
            <el-input v-model="phoneForm.passwd" placeholder="PassWord" type="password"></el-input>
          </el-form-item>
        </el-form>
        <!-- 邮箱登录 -->
        <el-form  v-show='activeId === 1' :model="emailForm" :rules="emailRules" ref="emailForm">
          <el-form-item prop="emailAdd" class="email-num">
            <el-input v-model="emailForm.emailAdd" placeholder="Email Add"></el-input>
          </el-form-item>

          <div class="sms-code" v-if="compStatus === 2">
            <el-form-item prop="verificationCode">
              <el-input v-model="phoneForm.verificationCode" placeholder="One Time Password"></el-input>
            </el-form-item>
            <el-form-item class="sms-code-btn">
              <el-button>Send</el-button>
            </el-form-item>
          </div>

          <el-form-item prop="passwd" class="passwd">
            <el-input v-model="emailForm.passwd" placeholder="PassWord" type="password"></el-input>
          </el-form-item>
        </el-form>

        <span
          class="agreement"
          v-if="compStatus === 1"
        >By creating an account, you agree to E-Chain's Conditions of Use and Privacy Notice.</span>
        <el-button class='post-btn' @click="beforeSubmit">Enter</el-button>
        <div class="links" v-if="compStatus === 1">
          <el-link :underline="false" @click="changeCompStatus">Forgot your password?</el-link>
          <el-link :underline="false">Sign Up</el-link>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>

import './login-style.scss'

import {
  login,
  resetMailPasswd,
  resetPhonePasswd
} from '@/api/login';

import {
  setToken
} from '@/api/token';

export default {
  name: "Login",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value) {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        if (!reg.test(value)) {
          callback(new Error("passwd must be between 8 and 16 characters."))
        } else {
          callback()
        }
      } else {
        callback(new Error("passwd is required."))
      }
    }

    return {
      tabList: [
        {
          id: 0,
          name: 'Phone'
        },
        {
          id: 1,
          name: 'Email'
        },
      ],
      activeId: 0,
      compStatus: 1,
      // 手机注册表单数据
      phoneForm: {
        region: "+86",
        phoneNum: "",
        verificationCode: "",
        passwd: "",
      },
      // 邮箱注册表单数据
      emailForm: {
        emailAdd: "",
        verificationCode: "",
        passwd: "",
      },
      regionList: [
        {
          label: '+86',
          value: '86'
        },
        {
          label: '+1',
          value: '1'
        },
        {
          label: '+81',
          value: '81'
        },
      ],
      phoneRules: {
        // region
        phoneNum: [
          {
            required: true,
            message: "Please input your mobile phone.",
            trigger: "blur",
          },
        ],
        passwd: [
          {
            required: true,
            message: "passwd is required.",
            trigger: "blur",
          },
          { validator: validatePassword, trigger: "blur" },
        ],
      },
      emailRules: {
        emailAdd: [
          {
            required: true,
            pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
            message: "Please enter a valid email.",
            trigger: "blur",
          },
        ],
        passwd: [
          {
            required: true,
            message: "passwd is required.",
            trigger: "blur",
          },
          { validator: validatePassword, trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    handleClick(id) {
      this.resetForm()
      if (this.activeId === id) return;
      this.activeId = id;
    },
    changeCompStatus() {
      this.compStatus = 2;
      this.phoneRules.verificationCode = [
        {
          required: true,
          message: "Please input your one time password.",
          trigger: "blur",
        }
      ]
      this.emailRules.verificationCode = [
        {
          required: true,
          message: "Please input your one time password.",
          trigger: "blur",
        }
      ]
      this.resetForm();
    },
    // 清空表单
    resetForm() {
      if (this.$refs.phoneForm) this.$refs.phoneForm.resetFields()
      if (this.$refs.emailForm) this.$refs.emailForm.resetFields()
    },
    beforeSubmit() {
      // 默认手机注册
      let formName = "phoneForm"
      // 手机注册验证
      if (this.activeId === 0) {
        // console.log("phone reg")
        formName = "phoneForm"
        // 邮箱注册验证
      } else if (this.activeId === 1) {
        // console.log("email reg")
        formName = "emailForm"
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.compStatus === 1) {
            this.postSubmit()
          } else {
            this.postResetSubmit()
          }
        } else {
          console.log("error submit!!")
          // return false
        }
      })
    },
    postSubmit() {
      let data = {}
      if (this.activeId === 0) {
        data = {
          mobile: this.phoneForm.phoneNum,
          password: this.phoneForm.passwd,
          logType: 1
        }
      } else if (this.activeId === 1) {
        data = {
          email: this.emailForm.emailAdd,
          password: this.emailForm.passwd,
          logType: 2
        }
      }

      console.log(data)

      login(data).then(res => {
        if (res.msgCode === 0) {
          this.$message.success('login success');
          
          if (res.data && res.data.token) {
            setToken(res.data.token);
            localStorage.setItem('USERINFO', JSON.stringify(res.data.user))

            this.$store.commit("SET_USERINFO", res.data.user);
            this.$store.commit("SET_LOGIN_STATUS", true);
          };

          this.$emit('handleClose');
        } else {
          this.$message.error(res.msgMessage);
        }
      })
    },
    postResetSubmit() {
      let data = {}
      if (this.activeId === 0) {
        data = {
          UserPhone: this.phoneForm.phone,
          password: this.phoneForm.passwd,
          verificationCode: this.phoneForm.verificationCode,
        }

        resetPhonePasswd(data).then(res => {
          console.log(res)
        })
      } else if (this.activeId === 1) {
        data = {
          UserEmail: this.emailForm.emailAdd,
          password: this.emailForm.passwd,
          verificationCode: this.phoneForm.verificationCode,
        }

        resetMailPasswd(data).then(res => {
          console.log(res)
        })
      }
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    font-size: 12px;
    color: #333;
    >:first-child{
      color: #999999;
    }
  }
}
</style>
