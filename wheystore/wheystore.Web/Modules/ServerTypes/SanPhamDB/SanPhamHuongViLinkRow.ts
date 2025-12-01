import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamHuongViLinkRow {
    Id?: number;
    SanPhamId?: number;
    HuongViId?: number;
    SanPhamTenSp?: string;
    HuongViTenHuongVi?: string;
}

export abstract class SanPhamHuongViLinkRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamHuongViLink';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamHuongViLinkRow>();
}