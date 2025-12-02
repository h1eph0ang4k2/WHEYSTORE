import { EntityDialog } from '@serenity-is/corelib';
import { TinhThanhForm, TinhThanhRow, TinhThanhService } from '../../ServerTypes/SanPhamDB';

export class TinhThanhDialog extends EntityDialog<TinhThanhRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return TinhThanhForm.formKey; }
    protected override getRowDefinition() { return TinhThanhRow; }
    protected override getService() { return TinhThanhService.baseUrl; }

    protected form = new TinhThanhForm(this.idPrefix);
}