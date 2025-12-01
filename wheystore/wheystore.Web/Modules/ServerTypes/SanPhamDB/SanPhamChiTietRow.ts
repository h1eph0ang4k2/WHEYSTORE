import { fieldsProxy } from "@serenity-is/corelib";

export interface SanPhamChiTietRow {
    Id?: number;
    SanPhamId?: number;
    TrongLuongText?: string;
    SoLanDungMin?: number;
    SoLanDungMax?: number;
    HamLuongProtein?: string;
    Calories?: string;
    HamLuongBcaa?: string;
    XuatXu?: string;
    SanPhamTenSp?: string;
}

export abstract class SanPhamChiTietRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TrongLuongText';
    static readonly localTextPrefix = 'SanPhamDB.SanPhamChiTiet';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SanPhamChiTietRow>();
}