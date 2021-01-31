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
                <span class="title">District Name</span>
                <br>
                <div id='districtName' v-for="(product) in products" :key="product._id" >{{ product.districtName }} </div>
            </div>
            
            <div id="csvFileNamesContainer">
                <span class="title">Link to File</span>
                <br>
                <div id='csvFileName' @click="downloadSingleCSV(index)" v-for="(product, index) in products" :key="product._id" > {{ product.districtName }} .csv file </div>
            </div>

        </div>
        <div id="downloadAllAndClear" @click="downloadAllCSVs()">Click here to download all csvs.<br> You must enable popups.</div>
        <div id='disclaimer'><em>This page is not an actual Ellevation webpage. It is part of Sandy Lord's application for Data Integration Specialist.</em></div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("/api/products");

            return {
              products: response.products
            }
        } catch (err) {
            console.log(err)
        } 
    },
    
    
    data() {
      return {
        districtName: "DistrictName"
      }
    },
    methods: {  
        downloadSingleCSV(index) {
            let csv = this.products[index].csv_file_name;
            window.open(csv);
        },
        downloadAllCSVs() {
            let csvs = [];
            let length = this.products.length - 1;
            
            let i = length;
            let j = length;

            while (i >= 0) {
                csvs.push(this.products[i].csv_file_name);
                i--;
            }
            
            while (j >= 0) {
                window.open(csvs[j]);
                j--;
            }
            
        }
    }
}
</script>

<style>
body {
    background-color: rgb(32, 94, 170);
    color: white;
    overflow-x: hidden;
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
