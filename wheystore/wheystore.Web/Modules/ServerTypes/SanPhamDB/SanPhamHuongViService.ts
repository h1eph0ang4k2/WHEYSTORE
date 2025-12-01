import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamHuongViRow } from "./SanPhamHuongViRow";

export namespace SanPhamHuongViService {
    export const baseUrl = 'SanPhamDB/SanPhamHuongVi';

    export declare function Create(request: SaveRequest<SanPhamHuongViRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamHuongViRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamHuongViRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamHuongViRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamHuongViRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamHuongViRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamHuongVi/Create",
        Update: "SanPhamDB/SanPhamHuongVi/Update",
        Delete: "SanPhamDB/SanPhamHuongVi/Delete",
        Retrieve: "SanPhamDB/SanPhamHuongVi/Retrieve",
        List: "SanPhamDB/SanPhamHuongVi/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamHuongViService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}