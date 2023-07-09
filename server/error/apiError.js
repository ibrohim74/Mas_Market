class ApiError extends Error{
    constructor(status, msg){
        super();
        this.status = status;
        this.msg = msg
    }
    static badRequest (msg){
        return new ApiError(404 , msg)
    }
    static internal (msg){
        return new ApiError(500 , msg)
    }
    static forbidden (msg){
        return new ApiError(403 , msg)
    }
}
module.exports = ApiError
