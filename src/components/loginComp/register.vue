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

        <el-form v-show="activeId === 0" :model="phoneForm" :rules="phoneRules" ref="phoneForm">

          <el-form-item prop="nickName" class="username">
            <el-input v-model="phoneForm.nickName" placeholder="User Name" type="text"></el-input>
          </el-form-item>

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
              <el-input v-model="phoneForm.phoneNum" placeholder="Phone Number" type='number'></el-input>
            </el-form-item>
          </div>

          <div class="sms-code">
            <el-form-item prop="verificationCode">
              <el-input v-model="phoneForm.verificationCode" maxlength="6" placeholder="One Time Password" type='number'></el-input>
            </el-form-item>
            <el-form-item class="sms-code-btn">
              <el-button @click="beforeGetVerifyCode" :disabled="isRegBtnDisabled">
                <span v-if="show">Send</span>
                <span v-else>{{count}}s</span>
              </el-button>
            </el-form-item>
          </div>

          <el-form-item prop="passwd" class="passwd">
            <el-input v-model="phoneForm.passwd" placeholder="PassWord" type="password"></el-input>
          </el-form-item>
        </el-form>

        <el-form v-show="activeId === 1" :model="emailForm" :rules="emailRules" ref="emailForm">
          <el-form-item prop="nickName" class="username">
            <el-input v-model="emailForm.nickName" placeholder="User Name" type="text"></el-input>
          </el-form-item>

          <el-form-item prop="emailAdd" class="email-num">
            <el-input v-model="emailForm.emailAdd" placeholder="Email Add"></el-input>
          </el-form-item>

          <div class="sms-code">
            <el-form-item prop="verificationCode">
              <el-input v-model="emailForm.verificationCode" maxlength="6" placeholder="One Time Password" type='number'></el-input>
            </el-form-item>
            <el-form-item class="sms-code-btn">
              <el-button @click="beforeGetVerifyCode" :disabled="isRegBtnDisabled">
                <span v-if="show">Send</span>
                <span v-else>{{count}}s</span>
              </el-button>
            </el-form-item>
          </div>

          <el-form-item prop="passwd" class="passwd">
            <el-input v-model="emailForm.passwd" placeholder="PassWord" type="password"></el-input>
          </el-form-item>
        </el-form>

        <span
          class="agreement"
        >By creating an account, you agree to E-Chain's Conditions of Use and Privacy Notice.</span>
        <el-button class='post-btn' @click="beforeSubmit">Register</el-button>
        <div class="links">
          <p>
            <span>Already have an account?</span>
            <span class="sign-in">Sign in here</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import './login-style.scss';

import {
  register,
  sendMailCode,
  sendPhoneCode
} from '@/api/login';

export default {
  name: "Register",
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

    // const validatePhoneNum = (rule, value, callback) => {
    //   if (this.phoneForm.phoneNum) {
    //     console.log(111)
    //   }
    // }
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
      // 注册类型
      registerType: {
        phoneReg: true,
        emailReg: false,
      },
      // 手机注册表单数据
      phoneForm: {
        nickName: "",
        region: "+86",
        phoneNum: "",
        passwd: "",
        verificationCode: ""
      },
      // 邮箱注册表单数据
      emailForm: {
        nickName: "",
        emailAdd: "",
        passwd: "",
        verificationCode: ""
      },

      show: true,
      count: "", // 初始化次数
      timer: null,
      isRegBtnDisabled: false,
      
      // 验证规则
      phoneRules: {
        // region
        name: [
          {
            required: true,
            message: "Please input your user name.",
            trigger: "blur",
          },
        ],
        phoneNum: [
          {
            required: true,
            message: "Please input your mobile phone.",
            trigger: "blur",
          },
          // { type: "number", message: "phone must be a number" },
          // {
          //   min: 11,
          //   max: 11,
          //   message: "phoneNum must be be 11 characters",
          //   trigger: "change",
          // },
        ],
        verificationCode: [
          {
            required: true,
            message: "captcha code is required.",
            trigger: "blur",
          },
          // { type: "number", message: "captcha must be a number" },
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
        name: [
          {
            required: true,
            message: "Please input your user name.",
            trigger: "blur",
          },
        ],
        emailAdd: [
          {
            required: true,
            pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
            message: "Please enter a valid email.",
            trigger: "blur",
          },
        ],
        verificationCode: [
          {
            required: true,
            message: "captcha code is required.",
            trigger: "blur",
          },
          // { type: "number", message: "captcha must be a number" },
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
      if (this.activeId === id) return;
      this.activeId = id;
      this.resetForm()
      switch (id) {
        case 0:
          this.registerType.phoneReg = true
          this.registerType.emailReg = false
          break
        case 1:
          this.registerType.emailReg = true
          this.registerType.phoneReg = false
          break

        default:
          break
      }
    },
    // 表单提交 //todo...
    beforeSubmit() {
      // 默认手机注册
      let formName = "phoneForm"
      // 手机注册验证
      if (this.registerType.phoneReg) {
        // console.log("phone reg")
        formName = "phoneForm"
        // 邮箱注册验证
      } else if (this.registerType.emailReg) {
        // console.log("email reg")
        formName = "emailForm"
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postSubmit()
        } else {
          console.log("error submit!!")
          // return false
        }
      })
    },

    postSubmit() {
      let tempForm = this.registerType.phoneReg ? this.phoneForm : this.emailForm
      
      let data = {
        nickName: tempForm.nickName,
        Password: tempForm.passwd,
        verificationCode: tempForm.verificationCode,
        sysType: 1,
      }

      if (this.registerType.phoneReg) {
        data.mobile = tempForm.phoneNum
        data.regType = 1
      } else {
        data.email = tempForm.emailAdd
        data.regType = 2
      }

      console.log(data)

      register(data).then(res => {
        if (res.msgCode === 0) {
          this.$message.success('register success');
          this.$emit('handleClose');
        } else {
          this.$message.error(res.msgMessage);
        }
      })
    },

    // 清空表单
    resetForm() {
      if (this.$refs.phoneForm) this.$refs.phoneForm.resetFields()
      if (this.$refs.emailForm) this.$refs.emailForm.resetFields()
    },
    // 获取验证码 //todo...
    beforeGetVerifyCode() {
      if (!this.checkFn()) return
      const TIME_COUNT = 5 // todo ... 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.isRegBtnDisabled = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            this.isRegBtnDisabled = false
            clearInterval(this.timer) // 清除定时器
            this.timer = null
          }
        }, 1000)
      }
      this.getVerifyCode()
    },
    getVerifyCode() {
      let data = {}
      if (this.registerType.phoneReg) {

        let AreaReg =  new RegExp(/^\+/);
        if (AreaReg.test(this.phoneForm.region)) {
          this.phoneForm.region = this.phoneForm.region.substr(1)
        }

        data.Phone = this.phoneForm.phoneNum;
        data.Area = this.phoneForm.region;
        
        console.log(data)

        sendPhoneCode(data).then(res => {
          if (res.msgCode === 0) {
            this.$message.success('send sucess')
          }
        })

      } else {
        data.Email = this.emailForm.emailAdd;
        sendMailCode(data).then(res => {
          if (res.msgCode === 0) {
            this.$message.success('send sucess')
          }
        })

      }
    },
    checkFn() {
      if (this.registerType.phoneReg) {
        console.log("phone reg")
        // 发送验证码前验证手机号
        if (!this.checkPhone()) {
          console.log("checkphone err")
          return false
        }
      } else if (this.registerType.emailReg) {
        console.log("email reg")
        // 发送验证码前验证邮箱
        if (!this.checkEmail()) {
          console.log("checkemail err")
          return false
        }
      }

      return true
    },
    checkPhone() {
      const phone = this.phoneForm.phoneNum
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        this.$message.error("Please enter a valid phone number.")
        return false
      }
      return true
    },
    checkEmail() {
      const email = this.emailForm.emailAdd
      if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
        this.$message.error("Please enter a valid email.")
        return false
      }
      return true
    },
  },
}
</script>
