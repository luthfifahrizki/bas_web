<template>
    <form @submit.prevent="submitForm" class="transaction-form">
      <div class="form-group">
        <label for="AccountID">Account ID:</label>
        <input type="text" id="AccountID" v-model="formData.ID" required>
      </div>
      
      <div class="form-group">
        <label for="BankID">Bank ID:</label>
        <input type="text" id="BankID" v-model="formData.BankID" required>
      </div>
  
      <div class="form-group">
        <label for="Amount">Amount Transfer:</label>
        <input type="numeric" id="Amount" v-model="formData.Amount" required>
      </div>
  
      <div class="form-group">
        <label for="date">Transaction Date:</label>
        <input type="date" id="date" v-model="formData.Date" required>
      </div>
      
      <button type="submit">Send</button>
    </form>
</template>
  
<script>
  export default {
    data() {
      return {
        formData: {
          ID: '',
          BankID: '',
          Amount: '',
          Date: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Proses data formulir di sini
        console.log('Data formulir transfer:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .transaction-form {
    width: 300px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc; /* Tambahkan border antara setiap form-group */
    padding-bottom: 10px; /* Tambahkan padding bawah untuk ruang antara form-group */
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: none; /* Hilangkan border pada input */
    border-radius: 4px;
    box-sizing: border-box;
    outline: none; /* Hilangkan  outline  */
  }
  
  button[type="submit"] {
    background-color: #fd3e3e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #088bb3;
  }
</style>