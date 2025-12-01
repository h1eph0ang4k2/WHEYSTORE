import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamLienQuanRow } from "./SanPhamLienQuanRow";

export interface SanPhamLienQuanColumns {
    Id: Column<SanPhamLienQuanRow>;
    SanPhamTenSp: Column<SanPhamLienQuanRow>;
    SanPhamLienQuanTenSp: Column<SanPhamLienQuanRow>;
}

export class SanPhamLienQuanColumns extends ColumnsBase<SanPhamLienQuanRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamLienQuan';
    static readonly Fields = fieldsProxy<SanPhamLienQuanColumns>();
}