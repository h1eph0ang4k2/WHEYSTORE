import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { QuaTangRow } from "./QuaTangRow";

export namespace QuaTangService {
    export const baseUrl = 'SanPhamDB/QuaTang';

    export declare function Create(request: SaveRequest<QuaTangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<QuaTangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<QuaTangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<QuaTangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<QuaTangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<QuaTangRow>>;

    export const Methods = {
        Create: "SanPhamDB/QuaTang/Create",
        Update: "SanPhamDB/QuaTang/Update",
        Delete: "SanPhamDB/QuaTang/Delete",
        Retrieve: "SanPhamDB/QuaTang/Retrieve",
        List: "SanPhamDB/QuaTang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>QuaTangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}