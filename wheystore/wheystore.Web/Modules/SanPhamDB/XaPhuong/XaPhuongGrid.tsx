import { EntityGrid } from '@serenity-is/corelib';
import { XaPhuongColumns, XaPhuongRow, XaPhuongService } from '../../ServerTypes/SanPhamDB';
import { XaPhuongDialog } from './XaPhuongDialog';

export class XaPhuongGrid extends EntityGrid<XaPhuongRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return XaPhuongColumns.columnsKey; }
    protected override getDialogType() { return XaPhuongDialog; }
    protected override getRowDefinition() { return XaPhuongRow; }
    protected override getService() { return XaPhuongService.baseUrl; }
}