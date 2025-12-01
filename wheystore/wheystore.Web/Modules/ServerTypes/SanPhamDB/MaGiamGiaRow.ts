import { fieldsProxy } from "@serenity-is/corelib";

export interface MaGiamGiaRow {
    Id?: number;
    MaCode?: string;
    MoTa?: string;
    LoaiGiam?: number;
    GiaTri?: number;
    DonToiThieu?: number;
    NgayBatDau?: string;
    NgayKetThuc?: string;
    SoLanDungToiDa?: number;
    SoLanDungMoiKhach?: number;
    IsActive?: boolean;
}

export abstract class MaGiamGiaRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'MaCode';
    static readonly localTextPrefix = 'SanPhamDB.MaGiamGia';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<MaGiamGiaRow>();
}