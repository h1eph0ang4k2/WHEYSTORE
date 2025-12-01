import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamLienQuanColumns, SanPhamLienQuanRow, SanPhamLienQuanService } from '../../ServerTypes/SanPhamDB';
import { SanPhamLienQuanDialog } from './SanPhamLienQuanDialog';

export class SanPhamLienQuanGrid extends EntityGrid<SanPhamLienQuanRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamLienQuanColumns.columnsKey; }
    protected override getDialogType() { return SanPhamLienQuanDialog; }
    protected override getRowDefinition() { return SanPhamLienQuanRow; }
    protected override getService() { return SanPhamLienQuanService.baseUrl; }
}