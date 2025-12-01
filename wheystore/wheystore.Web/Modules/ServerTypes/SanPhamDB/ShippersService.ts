import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { ShippersRow } from "./ShippersRow";

export namespace ShippersService {
    export const baseUrl = 'SanPhamDB/Shippers';

    export declare function Create(request: SaveRequest<ShippersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ShippersRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ShippersRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ShippersRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ShippersRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ShippersRow>>;

    export const Methods = {
        Create: "SanPhamDB/Shippers/Create",
        Update: "SanPhamDB/Shippers/Update",
        Delete: "SanPhamDB/Shippers/Delete",
        Retrieve: "SanPhamDB/Shippers/Retrieve",
        List: "SanPhamDB/Shippers/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>ShippersService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}