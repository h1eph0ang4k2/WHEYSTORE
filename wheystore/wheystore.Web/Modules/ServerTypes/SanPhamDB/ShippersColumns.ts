import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ShippersRow } from "./ShippersRow";

export interface ShippersColumns {
    MaShipper: Column<ShippersRow>;
    MaShipperCode: Column<ShippersRow>;
    TenCongTy: Column<ShippersRow>;
    TenShipper: Column<ShippersRow>;
    SoDienThoai: Column<ShippersRow>;
}

export class ShippersColumns extends ColumnsBase<ShippersRow> {
    static readonly columnsKey = 'SanPhamDB.Shippers';
    static readonly Fields = fieldsProxy<ShippersColumns>();
}