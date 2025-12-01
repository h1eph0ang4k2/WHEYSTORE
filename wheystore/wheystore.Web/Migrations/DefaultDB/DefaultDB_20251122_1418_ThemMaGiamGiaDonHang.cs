using FluentMigrator;

[DefaultDB, MigrationKey(20251122_1418)]
public class DefaultDB_20251122_1418_DonHang_ThemMaGiamGiaDonHang : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("DonHang")
            .AddColumn("MaGiamGiaId").AsInt32().Nullable()
                .ForeignKey("FK_DonHang_MaGiamGia", "MaGiamGia", "Id");
    }
}