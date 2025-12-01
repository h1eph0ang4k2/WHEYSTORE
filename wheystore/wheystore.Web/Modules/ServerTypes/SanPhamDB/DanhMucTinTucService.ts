import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DanhMucTinTucRow } from "./DanhMucTinTucRow";

export namespace DanhMucTinTucService {
    export const baseUrl = 'SanPhamDB/DanhMucTinTuc';

    export declare function Create(request: SaveRequest<DanhMucTinTucRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DanhMucTinTucRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DanhMucTinTucRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DanhMucTinTucRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<DanhMucTinTucRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DanhMucTinTucRow>>;

    export const Methods = {
        Create: "SanPhamDB/DanhMucTinTuc/Create",
        Update: "SanPhamDB/DanhMucTinTuc/Update",
        Delete: "SanPhamDB/DanhMucTinTuc/Delete",
        Retrieve: "SanPhamDB/DanhMucTinTuc/Retrieve",
        List: "SanPhamDB/DanhMucTinTuc/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>DanhMucTinTucService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}