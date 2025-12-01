import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TinTucRow } from "./TinTucRow";

export namespace TinTucService {
    export const baseUrl = 'SanPhamDB/TinTuc';

    export declare function Create(request: SaveRequest<TinTucRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TinTucRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TinTucRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TinTucRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TinTucRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TinTucRow>>;

    export const Methods = {
        Create: "SanPhamDB/TinTuc/Create",
        Update: "SanPhamDB/TinTuc/Update",
        Delete: "SanPhamDB/TinTuc/Delete",
        Retrieve: "SanPhamDB/TinTuc/Retrieve",
        List: "SanPhamDB/TinTuc/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TinTucService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}