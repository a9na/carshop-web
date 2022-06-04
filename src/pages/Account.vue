<script setup></script>

<template>
<div class="account">
  <div class="box-form">
    	<div class="left">
		<div class="overlay">
		<h1>Hello!</h1>
		<div class="buttn">
			<a href="#">Log in with facebook <box-icon name='facebook-square' type='logo' animation='tada' color='white' /></a> 
			<a href="#">Log in with twitter <box-icon name='twitter' type='logo' animation='tada' color='white' /></a>  
		</div>
		</div>
	</div>
    <div class="right">
      <h5>Sign up</h5>
      <div class="inputs">
        <input type="email" placeholder="Please enter your email adress">
        <input type="text" placeholder="Please enter your username">
      <br>
      <input type="password" placeholder="Enter your password (at least 8 characters long)">
      <input type="password" placeholder="Confirm your password">
      </div>
      <br>
      <br>
      <div class="remember-me">
        <label>
          <input type="checkbox" name="item" checked/>
          <span class="text-checkbox">Remember me</span>
        </label>
      </div>
          <br>
      <button>Sign up</button>
    </div>
  </div>
</div>
</template>

<style scoped>

.account {
  background-image: linear-gradient(135deg, #00003c, #6c73ef, #000);
  animation: gradient 10s ease infinite;
  background-size: 400% 400%;
  font-family: var(font-style);
  color: var(--color-dark);
}
@keyframes gradient 
{
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}

.box-form {
    margin: 10vh auto;
    width: 60vw;
    background-color: var(--pure-white);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex: 1 1 100%;
    align-items: stretch;
    justify-content: space-between;
    box-shadow: 0 0 20px 6px #090b6f85;
    height: 80vh;
}


@media (max-width: 980px) {
  .box-form {
    flex-flow: wrap;
    text-align: center;
    align-content: center;
    align-items: center;
	  height: auto;
  }
}

.box-form .left {
    color: var(--pure-white);
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/images/car-bg.jpg);
    overflow: hidden;
}
.box-form .left .overlay {
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.box-form .left .overlay h1 {
  font-size: var(--text-6);
  line-height: 1;
  font-weight: 900;
  margin-top: 10vh;
  margin-bottom: 0vh;
}
.box-form .left .overlay .buttn  {
  margin-top: 13vh;
 
}
.box-form .left .overlay .buttn a {
    background: #3b5998;
    color: #FFFFFF;
    margin-top: 10px;
    padding: 10px 40px;
    border-radius: 100px;
    display: inline-block;
    box-shadow: 0 3px 6px 1px #042d4657;
}

.box-form .left .overlay .buttn a:last-child {
    background: #1dcaff;
    margin-left: 0vw;
	padding-left: 4vw;
}

.box-form .right {
    padding-left: 4vw;
    overflow: hidden;
    width: 50vw;
    height: 100vh;
    padding-right: 4vw;
    padding-top: 0vh;
}
@media (max-width: 980px) {
  .box-form .right {
  width: 50vw;
	height: 50vh;
  }
}

.box-form .right h5 {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: var(--text-4);
  line-height: 0;
	text-align: center;
}
.box-form .right p {
    font-size: 2vh;
    color:#a0a3ab;
}
.box-form .right .inputs {
  overflow: hidden;
}
.box-form .right input {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #B0B3B9;
}
.box-form .right .remember-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.box-form .right .remember-me input {
  margin: 0;
  margin-right: 7px;
  width: auto;
}
label {
  display: block;
  position: relative;
  margin-left: 30px;
  font-family: var(--font-style);
}

label span.text-checkbox {
  display: inline-block;
  height: auto;
  position: relative;
  cursor: pointer;
  transition: all 0.9s linear;
}

.box-form .right button {
    float: right;
    color: #fff;
    font-size: 16px;
    padding: 12px 35px;
    border-radius: 50px;
    border: 0;
    outline: 0;
    box-shadow: 0px 4px 20px 0px #050608a6;
    background-image: linear-gradient(135deg, #1015b5 10%, #b55ae3 100%);
}
</style>