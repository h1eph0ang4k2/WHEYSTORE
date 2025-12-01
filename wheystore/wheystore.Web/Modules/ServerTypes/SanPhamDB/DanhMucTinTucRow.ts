import { fieldsProxy } from "@serenity-is/corelib";

export interface DanhMucTinTucRow {
    MaDm?: number;
    TenDm?: string;
    Slug?: string;
    MoTa?: string;
    ThuTu?: number;
    HienThi?: boolean;
}

export abstract class DanhMucTinTucRow {
    static readonly idProperty = 'MaDm';
    static readonly nameProperty = 'TenDm';
    static readonly localTextPrefix = 'SanPhamDB.DanhMucTinTuc';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<DanhMucTinTucRow>();
}