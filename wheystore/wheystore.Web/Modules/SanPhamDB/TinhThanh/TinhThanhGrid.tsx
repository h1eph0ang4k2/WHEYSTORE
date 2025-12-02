import { EntityGrid } from '@serenity-is/corelib';
import { TinhThanhColumns, TinhThanhRow, TinhThanhService } from '../../ServerTypes/SanPhamDB';
import { TinhThanhDialog } from './TinhThanhDialog';

export class TinhThanhGrid extends EntityGrid<TinhThanhRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return TinhThanhColumns.columnsKey; }
    protected override getDialogType() { return TinhThanhDialog; }
    protected override getRowDefinition() { return TinhThanhRow; }
    protected override getService() { return TinhThanhService.baseUrl; }
}