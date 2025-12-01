import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MaGiamGiaRow } from "./MaGiamGiaRow";

export interface MaGiamGiaColumns {
    Id: Column<MaGiamGiaRow>;
    MaCode: Column<MaGiamGiaRow>;
    MoTa: Column<MaGiamGiaRow>;
    LoaiGiam: Column<MaGiamGiaRow>;
    GiaTri: Column<MaGiamGiaRow>;
    DonToiThieu: Column<MaGiamGiaRow>;
    NgayBatDau: Column<MaGiamGiaRow>;
    NgayKetThuc: Column<MaGiamGiaRow>;
    SoLanDungToiDa: Column<MaGiamGiaRow>;
    SoLanDungMoiKhach: Column<MaGiamGiaRow>;
    IsActive: Column<MaGiamGiaRow>;
}

export class MaGiamGiaColumns extends ColumnsBase<MaGiamGiaRow> {
    static readonly columnsKey = 'SanPhamDB.MaGiamGia';
    static readonly Fields = fieldsProxy<MaGiamGiaColumns>();
}