namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("NhaCungCap")]
[DisplayName("Nha Cung Cap"), InstanceName("Nha Cung Cap")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class NhaCungCapRow : Row<NhaCungCapRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Ma Ncc"), Identity, IdProperty]
    public int? MaNcc { get => fields.MaNcc[this]; set => fields.MaNcc[this] = value; }

    [DisplayName("Ten Cong Ty"), Size(200), NotNull, QuickSearch, NameProperty]
    public string TenCongTy { get => fields.TenCongTy[this]; set => fields.TenCongTy[this] = value; }

    [DisplayName("Ten Lien He"), Size(100)]
    public string TenLienHe { get => fields.TenLienHe[this]; set => fields.TenLienHe[this] = value; }

    [DisplayName("Chuc Danh Lien He"), Size(100)]
    public string ChucDanhLienHe { get => fields.ChucDanhLienHe[this]; set => fields.ChucDanhLienHe[this] = value; }

    [DisplayName("Dia Chi"), Size(255)]
    public string DiaChi { get => fields.DiaChi[this]; set => fields.DiaChi[this] = value; }

    [DisplayName("Thanh Pho"), Size(100)]
    public string ThanhPho { get => fields.ThanhPho[this]; set => fields.ThanhPho[this] = value; }

    [DisplayName("Ma Buu Chinh"), Size(20)]
    public string MaBuuChinh { get => fields.MaBuuChinh[this]; set => fields.MaBuuChinh[this] = value; }

    [DisplayName("Quoc Gia"), Size(100)]
    public string QuocGia { get => fields.QuocGia[this]; set => fields.QuocGia[this] = value; }

    [DisplayName("So Dien Thoai"), Size(50)]
    public string SoDienThoai { get => fields.SoDienThoai[this]; set => fields.SoDienThoai[this] = value; }

    [DisplayName("Ma So Thue"), Size(50)]
    public string MaSoThue { get => fields.MaSoThue[this]; set => fields.MaSoThue[this] = value; }

    [DisplayName("Trang Chu"), Size(255)]
    public string TrangChu { get => fields.TrangChu[this]; set => fields.TrangChu[this] = value; }

    [DisplayName("Created At"), NotNull]
    public DateTime? CreatedAt { get => fields.CreatedAt[this]; set => fields.CreatedAt[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MaNcc;
        public StringField TenCongTy;
        public StringField TenLienHe;
        public StringField ChucDanhLienHe;
        public StringField DiaChi;
        public StringField ThanhPho;
        public StringField MaBuuChinh;
        public StringField QuocGia;
        public StringField SoDienThoai;
        public StringField MaSoThue;
        public StringField TrangChu;
        public DateTimeField CreatedAt;

    }
}