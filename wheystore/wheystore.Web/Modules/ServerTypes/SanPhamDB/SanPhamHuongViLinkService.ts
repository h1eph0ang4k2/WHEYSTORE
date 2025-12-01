import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamHuongViLinkRow } from "./SanPhamHuongViLinkRow";

export namespace SanPhamHuongViLinkService {
    export const baseUrl = 'SanPhamDB/SanPhamHuongViLink';

    export declare function Create(request: SaveRequest<SanPhamHuongViLinkRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamHuongViLinkRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamHuongViLinkRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamHuongViLinkRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamHuongViLinkRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamHuongViLinkRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamHuongViLink/Create",
        Update: "SanPhamDB/SanPhamHuongViLink/Update",
        Delete: "SanPhamDB/SanPhamHuongViLink/Delete",
        Retrieve: "SanPhamDB/SanPhamHuongViLink/Retrieve",
        List: "SanPhamDB/SanPhamHuongViLink/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamHuongViLinkService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}