import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamLienQuanRow } from "./SanPhamLienQuanRow";

export namespace SanPhamLienQuanService {
    export const baseUrl = 'SanPhamDB/SanPhamLienQuan';

    export declare function Create(request: SaveRequest<SanPhamLienQuanRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamLienQuanRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamLienQuanRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamLienQuanRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamLienQuanRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamLienQuanRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamLienQuan/Create",
        Update: "SanPhamDB/SanPhamLienQuan/Update",
        Delete: "SanPhamDB/SanPhamLienQuan/Delete",
        Retrieve: "SanPhamDB/SanPhamLienQuan/Retrieve",
        List: "SanPhamDB/SanPhamLienQuan/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamLienQuanService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}