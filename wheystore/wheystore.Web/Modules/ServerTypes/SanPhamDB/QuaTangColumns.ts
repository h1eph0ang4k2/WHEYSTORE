import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { QuaTangRow } from "./QuaTangRow";

export interface QuaTangColumns {
    Id: Column<QuaTangRow>;
    TenQua: Column<QuaTangRow>;
    GiaTri: Column<QuaTangRow>;
    MoTa: Column<QuaTangRow>;
    Anh: Column<QuaTangRow>;
}

export class QuaTangColumns extends ColumnsBase<QuaTangRow> {
    static readonly columnsKey = 'SanPhamDB.QuaTang';
    static readonly Fields = fieldsProxy<QuaTangColumns>();
}