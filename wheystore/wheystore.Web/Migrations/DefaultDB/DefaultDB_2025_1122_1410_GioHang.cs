using FluentMigrator;

namespace whey.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20251122_1410)]
public class DefaultDB_20251122_1410_GioHang: AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("GioHang")
             .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("UserId").AsInt32().NotNullable()
             .WithColumn("MaSp").AsInt32().NotNullable()
             .WithColumn("SoLuong").AsInt32().NotNullable().WithDefaultValue(1)
             .WithColumn("GiaLucThem").AsDecimal(18, 0).NotNullable().WithDefaultValue(0)
             .WithColumn("NgayTao").AsDateTime().NotNullable()
                 .WithDefault(SystemMethods.CurrentDateTime)
             .WithColumn("GhiChu").AsString(500).Nullable();

        Create.ForeignKey("FK_GioHang_Users")
            .FromTable("GioHang").ForeignColumn("UserId")
            .ToTable("Users").PrimaryColumn("UserId");

       
        Create.ForeignKey("FK_GioHang_SanPham")
            .FromTable("GioHang").ForeignColumn("MaSp")
            .ToTable("SanPham").PrimaryColumn("MaSp");

        Create.UniqueConstraint("UK_GioHang_UserId_MaSp")
            .OnTable("GioHang")
            .Columns("UserId", "MaSp");
    }
}
