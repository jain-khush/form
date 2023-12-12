<template>
    <form class="form">
        <h1>Company Register Request Form</h1>
        <div class="data">

        <label for="companyName">Company Name:</label>
        <input v-model="formData.companyName" type="text" required>

        <label for="email">Company e-mail:</label>
        <input type="email" id="email" required>

        <button type="submit" @click="submitted2">Register</button>
    
        <router-link to="/detail">
  <button >Already Registered</button>
    </router-link>
    </div>
      
</form>
</template>

<script src="../components/js/CompanyRegister.js"></script>


<style scoped>

.form{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 10% 27%;
    box-shadow: 0 0 5px 2px #333;
    background-color: white;
    border-radius: 15px;
}
.data{
    display: flex;
    flex-direction: column;
    margin: 5%;
}
button{
    width:30%;
    margin: 2% 35%;
    /* margin-bottom: 7%; */
    background-color: #333;
    color: white;
    height: 40px;
    cursor: pointer;
    font-weight: 900;
    border-radius: 8px;
}

button:hover {
    background-color: #494d49;
  }

label,input{
    margin: 2%;
    height: 30px;
    font-weight: 900;
}
</style>