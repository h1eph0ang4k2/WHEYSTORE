import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { GioHangRow } from "./GioHangRow";

export interface GioHangColumns {
    Id: Column<GioHangRow>;
    Username: Column<GioHangRow>;
    MaSpTenSp: Column<GioHangRow>;
    SoLuong: Column<GioHangRow>;
    GiaLucThem: Column<GioHangRow>;
    NgayTao: Column<GioHangRow>;
    GhiChu: Column<GioHangRow>;
}

export class GioHangColumns extends ColumnsBase<GioHangRow> {
    static readonly columnsKey = 'SanPhamDB.GioHang';
    static readonly Fields = fieldsProxy<GioHangColumns>();
}