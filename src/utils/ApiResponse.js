class ApiResponse {
    constructor(statuscode,data,message ="success"){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode<400   // 400 se niche pe hi response se bhejenge uper hoga to error se bhej denge
        
    }
}