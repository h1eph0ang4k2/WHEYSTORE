import { EntityGrid } from '@serenity-is/corelib';
import { QuaTangColumns, QuaTangRow, QuaTangService } from '../../ServerTypes/SanPhamDB';
import { QuaTangDialog } from './QuaTangDialog';

export class QuaTangGrid extends EntityGrid<QuaTangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return QuaTangColumns.columnsKey; }
    protected override getDialogType() { return QuaTangDialog; }
    protected override getRowDefinition() { return QuaTangRow; }
    protected override getService() { return QuaTangService.baseUrl; }
}