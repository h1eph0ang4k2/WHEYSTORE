using FluentMigrator;

namespace whey.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20251119_1401)]
public class DefaultDB_20251119_1401 : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("NhaCungCap")
                 .WithColumn("MaNcc").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("TenCongTy").AsString(200).NotNullable()
                 .WithColumn("TenLienHe").AsString(100).Nullable()
                 .WithColumn("ChucDanhLienHe").AsString(100).Nullable()
                 .WithColumn("DiaChi").AsString(255).Nullable()
                 .WithColumn("ThanhPho").AsString(100).Nullable()
                 .WithColumn("MaBuuChinh").AsString(20).Nullable()
                 .WithColumn("QuocGia").AsString(100).Nullable()
                 .WithColumn("SoDienThoai").AsString(50).Nullable()
                 .WithColumn("MaSoThue").AsString(50).Nullable()
                 .WithColumn("TrangChu").AsString(255).Nullable()
                 .WithColumn("CreatedAt").AsDateTime2().NotNullable()
                     .WithDefault(SystemMethods.CurrentDateTime);
    }
}
