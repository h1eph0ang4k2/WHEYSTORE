import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamQuaTangRow } from "./SanPhamQuaTangRow";

export namespace SanPhamQuaTangService {
    export const baseUrl = 'SanPhamDB/SanPhamQuaTang';

    export declare function Create(request: SaveRequest<SanPhamQuaTangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamQuaTangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamQuaTangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamQuaTangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamQuaTangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamQuaTangRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamQuaTang/Create",
        Update: "SanPhamDB/SanPhamQuaTang/Update",
        Delete: "SanPhamDB/SanPhamQuaTang/Delete",
        Retrieve: "SanPhamDB/SanPhamQuaTang/Retrieve",
        List: "SanPhamDB/SanPhamQuaTang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamQuaTangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}