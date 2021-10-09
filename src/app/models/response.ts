
export class DataResponse<T> {
    succeeded: boolean = false;
    message: string = "";
    statusCode: Number = 0;
    data!: T;
}

export class Response{
    succeeded: boolean = false;
    message: string = "";
    statusCode: Number = 0;
}
