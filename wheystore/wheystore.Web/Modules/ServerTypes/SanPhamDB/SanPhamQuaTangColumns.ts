import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamQuaTangRow } from "./SanPhamQuaTangRow";

export interface SanPhamQuaTangColumns {
    Id: Column<SanPhamQuaTangRow>;
    SanPhamTenSp: Column<SanPhamQuaTangRow>;
    QuaTangTenQua: Column<SanPhamQuaTangRow>;
    ThuTu: Column<SanPhamQuaTangRow>;
    IsDefault: Column<SanPhamQuaTangRow>;
}

export class SanPhamQuaTangColumns extends ColumnsBase<SanPhamQuaTangRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamQuaTang';
    static readonly Fields = fieldsProxy<SanPhamQuaTangColumns>();
}