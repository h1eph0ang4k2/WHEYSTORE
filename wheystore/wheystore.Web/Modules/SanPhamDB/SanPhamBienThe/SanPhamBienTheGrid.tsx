import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamBienTheColumns, SanPhamBienTheRow, SanPhamBienTheService } from '../../ServerTypes/SanPhamDB';
import { SanPhamBienTheDialog } from './SanPhamBienTheDialog';

export class SanPhamBienTheGrid extends EntityGrid<SanPhamBienTheRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamBienTheColumns.columnsKey; }
    protected override getDialogType() { return SanPhamBienTheDialog; }
    protected override getRowDefinition() { return SanPhamBienTheRow; }
    protected override getService() { return SanPhamBienTheService.baseUrl; }
}