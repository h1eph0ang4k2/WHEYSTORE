import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { MaGiamGiaRow } from "./MaGiamGiaRow";

export namespace MaGiamGiaService {
    export const baseUrl = 'SanPhamDB/MaGiamGia';

    export declare function Create(request: SaveRequest<MaGiamGiaRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<MaGiamGiaRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<MaGiamGiaRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<MaGiamGiaRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<MaGiamGiaRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<MaGiamGiaRow>>;

    export const Methods = {
        Create: "SanPhamDB/MaGiamGia/Create",
        Update: "SanPhamDB/MaGiamGia/Update",
        Delete: "SanPhamDB/MaGiamGia/Delete",
        Retrieve: "SanPhamDB/MaGiamGia/Retrieve",
        List: "SanPhamDB/MaGiamGia/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>MaGiamGiaService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}