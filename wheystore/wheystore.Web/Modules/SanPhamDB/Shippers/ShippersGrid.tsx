import { EntityGrid } from '@serenity-is/corelib';
import { ShippersColumns, ShippersRow, ShippersService } from '../../ServerTypes/SanPhamDB';
import { ShippersDialog } from './ShippersDialog';

export class ShippersGrid extends EntityGrid<ShippersRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return ShippersColumns.columnsKey; }
    protected override getDialogType() { return ShippersDialog; }
    protected override getRowDefinition() { return ShippersRow; }
    protected override getService() { return ShippersService.baseUrl; }
}