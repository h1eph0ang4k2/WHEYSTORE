import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamNoiDungRow {
    Id?: number;
    SanPhamId?: number;
    TieuDe?: string;
    LoaiSection?: number;
    NoiDungHtml?: string;
    ThuTu?: number;
    SanPhamTenSp?: string;
}

export abstract class SanPhamNoiDungRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TieuDe';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamNoiDung';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamNoiDungRow>();
}