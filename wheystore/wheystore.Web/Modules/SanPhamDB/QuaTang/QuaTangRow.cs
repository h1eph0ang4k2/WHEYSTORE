namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("QuaTang")]
[DisplayName("Qua Tang"), InstanceName("Qua Tang")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class QuaTangRow : Row<QuaTangRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Ten Qua"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenQua { get => fields.TenQua[this]; set => fields.TenQua[this] = value; }

    [DisplayName("Gia Tri"), Size(18)]
    public decimal? GiaTri { get => fields.GiaTri[this]; set => fields.GiaTri[this] = value; }

    [DisplayName("Mo Ta")]
    public string MoTa { get => fields.MoTa[this]; set => fields.MoTa[this] = value; }

    [DisplayName("Anh"), Size(255)]
    public string Anh { get => fields.Anh[this]; set => fields.Anh[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField TenQua;
        public DecimalField GiaTri;
        public StringField MoTa;
        public StringField Anh;

    }
}