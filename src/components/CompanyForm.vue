<template>
    <div class="form">
      <h1>Advertisement Form</h1>
      <div class="data">
        <label for="companyId">Company Name:</label>
        <select v-model="selectedCompany" required class="select">
          <option v-for="company in companyNames" :key="company">
            {{ company.companyName }}
          </option>
        </select>
  
        <label for="imageLink">Image Link:</label>
        <input v-model="formData.imageLink" type="text" required>
  
        <label for="category">Category:</label>

         <div>
        <label v-for="category in categories" :key="category">
          <input
            type="checkbox"
            v-model="selectedCategories"
            :value="category"
          />
          {{ category }}
        </label>
      </div>

        <label for="description">Description:</label>
        <input v-model="formData.description" type="text" required>
  
        <label for="externalLink">External Link:</label>
        <input v-model="formData.externalLink" type="text" required>

      </div>
  
      <button @click="submitted">Submit</button>
    </div>
  </template>


<script src="../components/js/CompanyForm.js">

</script>
<style scoped>

.form{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 7% 27%;
    /* border: 1px solid #333; */
    box-shadow: 0 0 5px 2px #333;
    background-color:white;
    border-radius: 15px;
}
.data{
    display: flex;
    flex-direction: column;
    margin: 5%;
}
button{
    width:30%;
    margin-left: 35%;
    margin-bottom: 7%;
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
    margin: 1% 1.2%;
    /* height: 30px; */
    font-weight: 900;
}
input{
  height: 20px;
}
.select{
    color: black;
    height: 35px;
    font-weight: 900;
}

@media only screen and (max-width: 480px) {
            .form {
                width: 100%;
            }
            }
</style>