<template>
    <div id='container'>
        <div id='lengthOfContainer'></div>
        <div id="topBar">
            <img id='logo' src="https://ellevationeducation.com/sites/all/themes/ellevation_zen/logo.png" alt="">
            <span>Ellevation <br><br>Data Challenge </span>
            <span>Sandy Lord <br><br> January-February 2021</span>
        </div>
        <div id="horizontalLine"></div>
        <div id='dataDisplayContainer'>
            
            <div id='districtNamesContainer'>
                <span class="title">Your District's Name</span>
                <br>
                <input id='distName' type="text" placeholder="District name..." maxlength="80">
            </div>
            
            <div id="csvFileNamesContainer">
                <span class="title">Your District's Data (.csv)</span>
                <br>
                <input type="file" @change="onFileSelected" />
            </div>

            <div id="submissionButton" @click="submitAlert()">Submit</div>

        </div>

        <div id='disclaimer'><em>This page is not an actual Ellevation webpage. It is part of Sandy Lord's application for Data Integration Specialist.</em></div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("http://localhost:3000/api/products");

            return {
              products: response.products
            }
        } catch (err) {
            console.log(err)
        } 
    },
    
    

    
    data() {
      return {
        districtName: "",
        selectedFile: "",
        // fileName: ""
      }
    },
    methods: {
            submitAlert() {
              window.alert("This being a prototype, I decided to not troubleshoot the upload feature - there is a multer issue. Back to this later on if necessary. -Sandy");
            },
            // onFileSelected(event) {

            //     this.selectedFile = event.target.files[0];
            //     // this.fileName = event.target.files[0].name;
            // },
            // async onAddProduct() {
            //     let data = new FormData();
            //     data.append("districtName", this.districtName);
            //     data.append("csvFile", this.selectedFile);

            //     let result = await this.$axios.$post("http://localhost:3000/api/products", data);
            //     window.alert("You have submitted your file successfully. Have a good day.");
                // this.$router.pu
            // },
        // downloadSingleCSV(index) {
        //     let text = this.products[index].csv_file_name;
        //     window.open(text);
        //     // console.log(text + index)
        // },
        // downloadAllCSVsAndClearDatabase() {
        //     console.log(this.products.length);
            
        // }
    }
}
</script>

<style>
body {
    background-color: rgb(32, 94, 170);
    color: white;
    overflow-x: hidden;
}

#submissionButton {
    font-size: 1.8em;
    border-left: 4px solid rgb(32, 94, 170);
    height: 60px;
    padding-top: 10px;
    padding-left: 5px;
    cursor: pointer;
    transition: 250ms;
    color: lightgray
}

#submissionButton:hover {
    /* border-left: 4px solid rgb(244, 148, 36); */
    color: white;
}


#lengthOfContainer {
  visibility: hidden;
  height: 0;
  width: 0;
}

#downloadAllAndClear {
    font-size: 1.3em;
    padding: 10px;
    text-align: center;
    border: 3px solid rgb(244, 148, 36);
    margin: 10px auto;
    border-radius: 3px;
    cursor: pointer;
    transition: 375ms;
}

#downloadAllAndClear:hover {
  background-color: rgb(140, 196, 60);
  color: black;
}

.title {
    font-size: 2em;
    text-align: center;
    border-bottom: 3px solid black;
}

#districtNamesContainer {
  display: flex;
  flex-direction: column;
}

#csvFileNamesContainer {
  display: flex;
  flex-direction: column;
}

#container {
    display: flex;
    justify-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: space-between; 
}

#logo {
  max-width: 300px;
  padding: 0 10px 10px 10px;
}

#topBar {
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
}

#topBar > span {
  max-width: 125px;
  min-width: 125px;
  font-size: 1.2em;
}

#horizontalLine {
  background-color: rgb(244, 148, 36);
  height: 10px;
  width: 100%;
}

#dataDisplayContainer {
  background-color: rgb(140, 196, 60);
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
}

#districtName {
  display: flex;
  flex-direction: column;
}

#csvFileName {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 125ms;
}

#csvFileName:hover {
  color: black;
}


#disclaimer {
  position: absolute;
  bottom: 5px;
}

</style>
