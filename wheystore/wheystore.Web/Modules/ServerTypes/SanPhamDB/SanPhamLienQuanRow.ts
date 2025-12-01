import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamLienQuanRow {
    Id?: number;
    SanPhamId?: number;
    SanPhamLienQuanId?: number;
    SanPhamTenSp?: string;
    SanPhamLienQuanTenSp?: string;
}

export abstract class SanPhamLienQuanRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamLienQuan';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamLienQuanRow>();
}