import { EntityDialog } from '@serenity-is/corelib';
import { DanhMucSanPhamForm, DanhMucSanPhamRow, DanhMucSanPhamService } from '../../ServerTypes/SanPhamDB';

export class DanhMucSanPhamDialog extends EntityDialog<DanhMucSanPhamRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return DanhMucSanPhamForm.formKey; }
    protected override getRowDefinition() { return DanhMucSanPhamRow; }
    protected override getService() { return DanhMucSanPhamService.baseUrl; }

    protected form = new DanhMucSanPhamForm(this.idPrefix);
}