import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamNoiDungRow } from "./SanPhamNoiDungRow";

export namespace SanPhamNoiDungService {
    export const baseUrl = 'SanPhamDB/SanPhamNoiDung';

    export declare function Create(request: SaveRequest<SanPhamNoiDungRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamNoiDungRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamNoiDungRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamNoiDungRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamNoiDungRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamNoiDungRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamNoiDung/Create",
        Update: "SanPhamDB/SanPhamNoiDung/Update",
        Delete: "SanPhamDB/SanPhamNoiDung/Delete",
        Retrieve: "SanPhamDB/SanPhamNoiDung/Retrieve",
        List: "SanPhamDB/SanPhamNoiDung/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamNoiDungService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}