
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";



const fetchProductInfo =()=>{
    fetchProductCatalog()
    .then((catalog)=>{
        console.log(catalog)
        for(let i=0; i < catalog.length; i++){

          fetchProductReviews(catalog[i].id).then((reviews)=>{
            for(let j=0; j<reviews.length; j++){
                if(catalog[i].id == reviews[j].id){
                    console.log(`${catalog[i].name}:`, reviews[j]);
                }}
        }).catch((error) => console.error("Error:", error))}
    })
    .catch((error) => console.error("Error:", error))
    .then((report)=> fetchSalesReport())
    .then((details)=> console.log(details))
    .catch((error) => console.error("Error:", error))
    .finally(() => console.log("All API calls completed successfully!"))
}

fetchProductInfo()