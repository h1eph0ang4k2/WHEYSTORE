using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251202_1426)]
public class DefaultDB_20251202_1426_LienKetIDKhachHang : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("KhachHang")
            .AddColumn("TinhThanhId").AsInt32().Nullable()
            .ForeignKey("FK_KhachHang_TinhThanh", "TinhThanh", "Id")
            .AddColumn("QuanHuyenId").AsInt32().Nullable()
            .ForeignKey("FK_KhachHang_QuanHuyen", "QuanHuyen", "Id")
            .AddColumn("XaPhuongId").AsInt32().Nullable()
            .ForeignKey("FK_KhachHang_XaPhuong", "XaPhuong", "Id");
    }
}