import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamNoiDungColumns, SanPhamNoiDungRow, SanPhamNoiDungService } from '../../ServerTypes/SanPhamDB';
import { SanPhamNoiDungDialog } from './SanPhamNoiDungDialog';

export class SanPhamNoiDungGrid extends EntityGrid<SanPhamNoiDungRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamNoiDungColumns.columnsKey; }
    protected override getDialogType() { return SanPhamNoiDungDialog; }
    protected override getRowDefinition() { return SanPhamNoiDungRow; }
    protected override getService() { return SanPhamNoiDungService.baseUrl; }
}