import { EntityDialog } from '@serenity-is/corelib';
import { DanhMucTinTucForm, DanhMucTinTucRow, DanhMucTinTucService } from '../../ServerTypes/SanPhamDB';

export class DanhMucTinTucDialog extends EntityDialog<DanhMucTinTucRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return DanhMucTinTucForm.formKey; }
    protected override getRowDefinition() { return DanhMucTinTucRow; }
    protected override getService() { return DanhMucTinTucService.baseUrl; }

    protected form = new DanhMucTinTucForm(this.idPrefix);
}