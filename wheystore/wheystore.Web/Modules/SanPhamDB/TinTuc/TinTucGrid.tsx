import { EntityGrid } from '@serenity-is/corelib';
import { TinTucColumns, TinTucRow, TinTucService } from '../../ServerTypes/SanPhamDB';
import { TinTucDialog } from './TinTucDialog';

export class TinTucGrid extends EntityGrid<TinTucRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return TinTucColumns.columnsKey; }
    protected override getDialogType() { return TinTucDialog; }
    protected override getRowDefinition() { return TinTucRow; }
    protected override getService() { return TinTucService.baseUrl; }
}