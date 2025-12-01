import { EntityDialog } from '@serenity-is/corelib';
import { SanPhamNoiDungForm, SanPhamNoiDungRow, SanPhamNoiDungService } from '../../ServerTypes/SanPhamDB';

export class SanPhamNoiDungDialog extends EntityDialog<SanPhamNoiDungRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return SanPhamNoiDungForm.formKey; }
    protected override getRowDefinition() { return SanPhamNoiDungRow; }
    protected override getService() { return SanPhamNoiDungService.baseUrl; }

    protected form = new SanPhamNoiDungForm(this.idPrefix);
}