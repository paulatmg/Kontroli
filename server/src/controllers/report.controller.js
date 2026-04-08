import reportRepository from "../repository/report.repository.js";


const reportController = {

    async get(){
        return reportRepository.get();
    },

    async post(req){

        const { product_name, price, quantity,  seller, date }  = req.body;

        await reportRepository.post(product_name, price, quantity,  seller, date);

        return "qualquer coisa";
    }

}


export default reportController;